import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share'
import{API} from '../config'
import { Link } from 'react-router-dom'

const Cards = ({item}) => {

  return (
    <>
     <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              component="img"
              height="140"
              image={`${API}/${item.product_image}`}
              alt={item.product_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.product_name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Rs{item.product_price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to ={`/product/${item._id}`}>
                <Button size="medium" fullWidth color={'primary'} variant={'outlined'}>
                  View Details <ShareIcon />
                </Button> </Link>
            </CardActions>
          </Card>
    </>
  )
}

  
export default Cards