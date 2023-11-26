// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import {Paper, Stack, Typography,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Pagination from '@mui/material/Pagination'
import CardNavigationCenter from "./../cards-OV/CardNavigationCenter"


const TableStickyHeader = ({rows, columns, tooltipData}) => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Stack direction="row" sx={{width: '100%', px:{xs:5}}}>
        <Stack direction="row" alignItems='center' sx={{flex:1}}>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              총
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              99
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              건
            </Typography>
            {tooltipData ?
              <Stack sx={{pl:{xs:4}}}>
                <Typography variant='subtitle1' sx={{ marginBottom: 2 }}>
                  {tooltipData}
                </Typography>
              </Stack>:null}
        </Stack>
        <Stack>
          <FormControl fullWidth>
            <Select
              hiddenLabel
              defaultValue='10'
              value='10'
              id='form-layouts-separator-select'
              labelId='form-layouts-separator-select-label'
              size="small"
            >
              <MenuItem value='10'>10</MenuItem>
              <MenuItem value='20'>20</MenuItem>
              <MenuItem value='30'>30</MenuItem>
              <MenuItem value='40'>40</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={rows.length}
      />
    </Stack>
  )
}

export default TableStickyHeader
