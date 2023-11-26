// ** MUI Imports
import * as React from 'react';
import SettingTablePresenter from "../../layouts/settingTable-Presenter";
import TableStickyHeader from "../../views/tables-OV/TableStickyHeader"
import {Grid, Stack, Typography, Select, TextField, Divider,ToggleButtonGroup, ToggleButton,Button,Chip} from '@mui/material';

//테이블
function createData1(name, code, population, size, density, button, chipColor) {
  const codeContent = (
    <div>
      <Chip label="Chip" size='small' color={chipColor} /> {code}
    </div>
  );

  return { name, code: codeContent, population, size, density, button}
}

const columnsData1 = [
  { id: 'name', label: 'No', minWidth: 70 },
  { id: 'code', label: '마켓계정'},
  {
    id: 'population',
    label: '작업내용/결과',
    minWidth: 470,
  },
  {
    id: 'size',
    label: '전송요청일',
    minWidth: 100,
  },
  {
    id: 'density',
    label: '전송완료일',
    minWidth: 100,
  },
  {
    id: 'button',
    label: '바로가기',
    minWidth: 70,
  }
]

const rowsData1 = [
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
  createData1('99', 'mpmanager_jp@cafe24corp.com','[수집] 성공 0건', '2023-09-06 18:00', '2023-09-06 18:00',<Button variant='outlined' size='small'>바로가기</Button>,"secondary"),
]

//서치버튼
const btnData = [
  { children: '초기화하기', variant: "text" },
  { children: '검색하기', variant: "contained" },
];

//탭
const tabData = [
  {
    label: '완료',
    content: null,
    subTabs: [
      { label: '문의사항', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> },
      { label: '긴급메시지', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> },
      { label: '구매후기', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> }
    ]
  },
  {
    label: '실패',
    content: null,
    subTabs: [
      { label: '문의사항', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> },
      { label: '긴급메시지', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> },
      { label: '구매후기', content: <TableStickyHeader rows={rowsData1} columns={columnsData1}/> }
    ]
  }
];

//서치
const SearchDatas = () =>{

  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      선택
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      오늘
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      3일
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      7일
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      1개월
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return(
    <>
      <Grid item xs={12}>
        <Grid container alignItems={'center'}>
          <Grid xs={2}>
              <Typography variant='body2' sx={{ fontWeight: 600}}>
                기간
              </Typography>
          </Grid>
          <Grid xs={9.5}>
            <Grid container>
              <Grid xs={12}>
                <Stack direction={'row'} sx={{width:'100%'}} spacing={2}>
                  <Select size="small" defaultValue={'전송요청일'} >
                    <option value={'전송요청일'}>전송요청일</option>
                  </Select>
                  <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
                    {children}
                  </ToggleButtonGroup>
                  <TextField size="small" label='2023-01-31' placeholder='carterLeonard' />
                  <TextField size="small" label='2023-01-31' placeholder='carterLeonard' />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0 }} />
      <Grid item xs={12} >
        <Grid container alignItems={'center'}>
          <Grid xs={2}>
            <Stack>
              <Typography variant='body2' sx={{ fontWeight: 600}}>
                작업내용 / 결과
              </Typography>
            </Stack>
          </Grid>
          <Grid xs>
            <Grid container alignItems={"center"}>
              <Grid xs>
                <Stack direction={'row'} sx={{width:'100%'}} spacing={2}>
                  <Select size="small" fullWidth >
                    <option >전송요청일</option>
                  </Select>
                  <TextField size="small" fullWidth label='' placeholder='carterLeonard' />
                </Stack>
              </Grid>
              <Grid xs={2}>
                <Stack sx={{pl:{xs:4}}}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    마켓
                  </Typography>
                </Stack>
              </Grid>
              <Grid xs>
                <TextField size="small" fullWidth label='전체' placeholder='carterLeonard' />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

//데이타
const ProductListContainer = () => {
  return (
    <SettingTablePresenter
      pageHeader={'주문처리이력'}
      btnData={btnData}
      tabData={tabData}
      searchDatas={<SearchDatas/>}
      rows={rowsData1}
      columns={columnsData1}
    />
  )
}

export default ProductListContainer
