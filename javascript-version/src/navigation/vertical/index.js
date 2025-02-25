// ** Icon imports
// ** 네비게이션
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'


const navigation = () => {
  return [
    {
      title: '주문처리이력',
      icon: HomeOutline,
      path: '/orderList'
    },
    {
      title: '상품관리이력',
      icon: HomeOutline,
      path: '/productList'
    },
    {
      title: '주문수집이력',
      icon: HomeOutline,
      path: '/crawlList'
    },
    {
      title: '재고전송이력',
      icon: HomeOutline,
      path: '/wmsbcMarketSendHistory'
    },
    {
      title: '게시글관리이력',
      icon: HomeOutline,
      path: '/boardList'
    }
  ]
}

export default navigation
