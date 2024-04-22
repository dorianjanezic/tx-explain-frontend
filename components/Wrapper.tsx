import { Box, Title } from '@mantine/core';
import React, { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Box style={{ maxWidth: 1440, margin: 'auto', padding: '2rem' }}>
            {/* <Title style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>
                TX Explain
            </Title> */}
            {children}
        </Box>
    )
}

export default Wrapper