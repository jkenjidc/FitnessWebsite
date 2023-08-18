import React from 'react'
import { Typography,Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; 

const extraDetail = [
  {
    icon: BodyPartImage,
    name: bodyPart
  },
  {
    icon: TargetImage,
    name: bodyPart
  },
  {
    icon: EquipmentImage,
    name: bodyPart
  }
]
  return (
    <Stack
        gap = "60px"
        sx = {{
            flexDirection :{lg: 'row'},
            p: '20px',
            alignItems: 'center'
        }}
    >
        <img src={gifUrl} alt={name} 
        loading="lazy" className="detail-image" />
        <Typography variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `} is one of the best exercises
          to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        <Typography>
          {extraDetail.map((item) => (
            <Stack key={item} direction = "row" gap = "24px" 
            alignItems = "center">
              <button>
                <img src = {item.icon}/>
              </button>
              <Typography variant = "h6">
                {item.name}

              </Typography>
            </Stack>
          ))}
        </Typography>

    </Stack>
  )
}

export default Detail