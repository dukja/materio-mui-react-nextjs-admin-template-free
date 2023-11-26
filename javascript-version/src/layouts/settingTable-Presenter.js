// ** MUI Imports
import Grid from '@mui/material/Grid'
import {Link,Button,Stack, CardContent} from '@mui/material'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Tabs from "./../layouts/tabs"
// ** Demo Components Imports
import FormLayoutsSeparator from "./../views/form-layouts-OV/FormLayoutsSeparator"
import TableStickyHeader from "./../views/tables-OV/TableStickyHeader"

const SettingTablePresenter = ({ pageHeader, btnData ,tabData, searchDatas, tableData}) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            {pageHeader}
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <FormLayoutsSeparator searchDatas={searchDatas}/>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Stack justifyContent={'center'} direction={'row'} spacing={2} sx={{width:"100%"}}>
          {btnData.map(({index,children,variant})=>(
            <Button key={index} variant={variant}>{children}</Button>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{py:{xs:2}}}>
            {tabData ?
            <Tabs
              tabData={tabData}
            /> : tableData
            }
        </Card>
      </Grid>

    </Grid>
  )
}

export default SettingTablePresenter
