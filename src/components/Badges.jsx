import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Badges(props) {
  return (
    <Badge badgeContent={props.badgeContent} color="primary">
      
      <ShoppingCartIcon className='badgeIcon text-green-400'  />
    </Badge>
  );
}
