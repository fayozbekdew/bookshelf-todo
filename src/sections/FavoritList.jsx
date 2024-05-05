
import styled from "@emotion/styled";
import { Sheet } from "@mui/joy";
import { Grid } from "@mui/material";
import { useContext } from "react"
import { Cardd } from "../components"
import { BookContext } from "../context/BookContext"
const Item = styled(Sheet)(() => ({
  backgroundColor: '#fffa',
  textAlign: 'center',
  borderRadius: 4,
}));
const HomeSty = styled('div')(() => ({
padding: '50px 20px',
width: '100%',
maxWidth: '1200px',
marginLeft:'auto',
marginRight: 'auto'

}))
const FavoritList = () => {
  const { favoritList } = useContext(BookContext)
  return (
    <HomeSty>
      <Grid
container
spacing={{ xs: 2, md: 1 }}
columns={{ xs: 2, sm: 8, md: 12 }}
rowGap={{xs:3, md:3}}
sx={{ flexGrow: 1 }}
>
{favoritList && favoritList.map((value) => (
  <Grid xs={2} sm={4} md={4} key={crypto.randomUUID()}>
   <Item>
   <Cardd value={value}/>
   </Item>
  </Grid>
))}
</Grid>
    </HomeSty>
  )
}

export default FavoritList