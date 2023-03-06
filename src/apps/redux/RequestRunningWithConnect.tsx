import React from 'react';
import { useCallback, useState } from 'react';

import {
  dispatchCurrentValue,
  dispatchRequestRunning,
  useCurrentValue,
  useRequestRunning,
} from './redux-support';
import { Box, Button, TextField, Stack, LinearProgress } from '@mui/material';

const RRName = '__RequestRunning';

export function RequestRunningWithConnect() {
  const [value, setValue] = useState('');
  const rq = useRequestRunning();
  const cv = useCurrentValue();

  const startRequest = useCallback(async (v: string) => {
    try {
      await new Promise<void>((resolve) => {
        dispatchRequestRunning(RRName);
        window.setTimeout(() => {
          dispatchCurrentValue(v);
          resolve();
        }, 1000);
      });
    } finally {
      dispatchRequestRunning('');
    }
  }, []);
  if (rq === RRName) {
    return (
      <Stack spacing={2}>
        <LinearProgress />
        <Box sx={{ fontWeight: '600' }}>Request is running...</Box>
      </Stack>
    );
  }

  return (
    <Stack spacing={1}>
      <TextField
        label={'Just a value entry...'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></TextField>
      <Stack direction={'row'} spacing={1}>
        <Button disabled={!value} onClick={() => startRequest(value)}>
          Save value to redux
        </Button>
      </Stack>
      <Stack direction={'row'} spacing={1}>
        <Box>current value:</Box>
        <Box sx={{ fontWeight: '600' }}>{cv || ''}</Box>
      </Stack>
    </Stack>
  );
}
