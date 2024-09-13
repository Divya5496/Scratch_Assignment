import React from "react";
import './styles.css';
import { Box, Tabs, Tab } from "@mui/material";
import { styled } from '@mui/system';

const blue = {
  50: '#F0F7FF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5'
};

const tabs = ['small', 'medium', 'large'];

// Styling for Tabs
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minWidth: 250,
  backgroundColor: blue[500],
  borderRadius: 8,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styling for Tab
const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, sans-serif',
  color: 'white',
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  width: '70%',
  padding: '5px 5px',
  margin: '2px 2px',
  border: 'none',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: blue[400],
  },
  '&.Mui-selected': {
    backgroundColor: blue[50],
    color: blue[600],
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export const Resize = (props) => {
  const { setSize, size } = props;

  return (
    <Box className='spriteContainer'
      sx={{
        padding: '10px',
        flexGrow: 1,
        fontFamily: 'monospace',
        height: '80px',
        maxWidth: '350px',
        background: 'white',
        borderRadius: '20px',
      }}
    >
      <span style={{ color: 'grey', fontFamily: 'monospace', fontSize: "13px" }}>Resize</span>
      <Box sx={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        columnGap: '20px',
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <StyledTabs value={tabs.indexOf(size)} onChange={(event, newValue) => setSize(tabs[newValue])}>
          {tabs.map((item) => (
            <StyledTab key={item} label={item} />
          ))}
        </StyledTabs>
      </Box>
    </Box>
  );
};

export default Resize;
