import React from 'react'
import { Breadcrumbs, Typography } from "@mui/material";
import Link from 'next/link';

const Breadcrumb = () => {



  return (
    <div className="flex items-center justify-between mt-8 mb-4">
    <h2>Page Name</h2>
  
  
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/dashboard">
    Home
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/report"
  >
    Report
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>

</div>
  )
}

export default Breadcrumb
