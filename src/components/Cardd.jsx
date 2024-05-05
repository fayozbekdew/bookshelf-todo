import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';


const CardBottom = styled("div")(() => ({
  display: 'flex',
  alignItems: 'center',
  gap:'10px',
  marginLeft: 'auto'
}))
export default function Cardd({value}) {
  const {addToFavorite} = useContext(BookContext)
  const {name, price, img, } = value
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Name: {name}</Typography>
        <Typography level="title-lg">Autor: </Typography>
        <IconButton
          onClick={ () => addToFavorite(value)}
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={img}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${price}
          </Typography>
        </div>
        <CardBottom>
        <Button
          variant="solid"
          size="md"
          color="warning"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Delete
        </Button>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Edit
        </Button>
        </CardBottom>
      </CardContent>
    </Card>
  );
}