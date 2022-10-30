import React, { useEffect, useState } from 'react';
import { Pagination, Box } from '@mui/material';
import { CollectionsOutlined } from '@mui/icons-material';

const pageSize = 4;

const FilterPagination = () => {





  
  return (
    <Box
    display="flex"
    justifyContent={"center"}
    alignItems="center"
     sx={{ height:"6%", marginBottom:"-50px", width:"90%", marginLeft:"35px", marginTop:"20px"}}>
     <Pagination
        count={5}
        size="large"
        color='primary'
        
     />  
    </Box>
  )
}

export default FilterPagination