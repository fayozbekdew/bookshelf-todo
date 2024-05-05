import styled from '@emotion/styled';
import { Transform } from '@mui/icons-material';
import { Sheet } from '@mui/joy';
import { Grid } from '@mui/material'
import React from 'react'
import { Cardd } from '../components'
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

export const productDb = [
  {
    name: "O'yin pulti",
    id: 1,
    img: '',
    price: 120,
    oldPrice: 160,
    iscount: 50,
  },
  {
    name: "RGB klaviatura",
    id: 2,
    img: '',
    price: 140,
    oldPrice: 180,
    
    discount: 40,
  },
  {
    name: "Monitor",
    id: 3,
    img:'',
    price: 120,
    oldPrice: 160,
    t: 45,
  },
  {
    name: "Stul",
    id: 4,
    img:'',
    price: 120,
    oldPrice: 160,
    iscount: 30,
  },
  {
    name: "Ayollar sumkasi",
    id: 5,
    img:'',
    price: 120,
    oldPrice: 160,
    discount: 26,
  },
  {
    name: "Qizlar kurtkasi",
    id: 6,
    img:'',
    price: 120,
    oldPrice: 160,},
    {
      name: "Karnay",
    id: 7,
    img: '',
    price: 120,
    oldPrice: 160,
    
    discount: 47,
  },
  {
    name: "Kitob javoni",
    id: 8,
    img: '',
    price: 120,
    oldPrice: 160,
    iscount: 32,
  },
  {
    name: "Cesar Choco",
    id: 9,
    img:'',
    price: 120,
    oldPrice: 160,},

      {
    name: "Canon Camera",
    id: 10,
    img: '',
    price: 120,
    oldPrice: 160,
    discount: 22,
  },
  {
    name: "Lonovo 1908",
    id: 11,
    img: '',
    price: 120,
    oldPrice: 160,
    }, 
    {
    name: "Erkaklar kiyimi",
    id: 12,
    img: '',
    price: 120,
    oldPrice: 160,
    
    discount: 42,
  },
  {
    name: "DiDiT o'yinchoq",
    id: 13,
    img: '',
    price: 120,
    oldPrice: 160,
    iscount: 53,
  },
  {
    name: "Butsa",
    id: 14,
    img: '',
    price: 120,
    oldPrice: 160,},
    {
    name: "Fentech O'yin joystik",
    id: 15,
    img: '',
    price: 120,
    oldPrice: 160,
    
  },
  {
    name: "Erkaklar kiyimi",
    id: 16,
    img: '',
    price: 120,
    oldPrice: 160,
    
    discount: 41,
  },
  {
    id: 17,

    name: "Carrom Board",
    price: 29.99,
    description: "Classic wooden carrom board for family fun",
    oldPrice: 160,
    category: "Board Games",

    img: "https://example.com/carrom_board.jpg",
  },
  {
    id: 18,

    name: "Settlers of Catan",

    price: 39.99,
    oldPrice: 160,
    description: "Popular strategy board game for 3-4 players",

    category: "Board Games",

    img: "https://example.com/catan_game.jpg",
  },
  {
    id: 19,

    name: "Pandemic",

    price: 34.99,
    oldPrice: 160,
    description: "Cooperative board game to save the world from diseases",

    category: "Board Games",

    img: "https://example.com/pandemic_game.jpg",
  },

  {
    id: 20,

    name: "Ticket to Ride",

    price: 44.99,
    oldPrice: 160,
    description: "Train adventure board game for 2-5 players",
    category: "Board Games",

    img: "https://example.com/ticket_to_ride.jpg",
  },
  {
    id: 21,

    name: "Codenames",

    price: 19.99,
    oldPrice: 160,
    description: "Word association party game for groups",

    category: "Party Games",

    img: "https://example.com/codenames_game.jpg",
  },

  {
    id:22,
    name: "Jenga",
    oldPrice: 160,
    price: 12.99,
    description: "Classic stacking block game for all ages",

    category: "Family Games",

    img: "https://example.com/jenga_game.jpg",
  },
];
const Home = () => {
    return (
    <HomeSty>
      <Grid
container
spacing={{ xs: 2, md: 1 }}
columns={{ xs: 2, sm: 8, md: 12 }}
rowGap={{xs:3, md:3}}
sx={{ flexGrow: 1 }}
>
{productDb.map((value) => (
  <Grid xs={2} sm={4} md={4} key={value.id}>
   <Item>
   <Cardd value={value}/>
   </Item>
  </Grid>
))}
</Grid>
    </HomeSty>
  )
}

export default Home