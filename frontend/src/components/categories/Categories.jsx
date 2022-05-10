import React from './categories.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';

export default function MediaCard() {
  return (
    <div className='manga'>
    <Card className='onePiece' sx={{ maxHeight: 550 }}>
      <CardMedia
        className='onePiece'
        component="img"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rightstufanime.com%2Fimages%2FproductImages%2F9781591160571_manga-One-Piece-Graphic-Novel-2-Buggy-the-Clown-East-Blue-primary&f=1&nofb=1"
        alt="1piece"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <br/>One Piece
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The story follows the adventures of Monkey D. Luffy, a boy whose 
        body gained the properties of rubber after unintentionally eating a Devil Fruit. 
        With his pirate crew, the Straw Hat Pirates, 
        Luffy explores the Grand Line in search of the world's ultimate treasure 
        known as the "One Piece" in order to become the next King of the Pirates.
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='hxh' sx={{maxHeight: 550}}>
      <CardMedia
        className="hunter"
        component="img"
        image="https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg"
        alt="hxh"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hunter x Hunter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The story focuses on a young boy named Gon Freecss 
        who discovers that his father, who left him at 
        a young age, is actually a world-renowned Hunter, 
        a licensed professional who specializes in fantastical pursuits.
        Gon departs on a journey to become a Hunter and eventually find his father.
        Along the way, Gon meets various other Hunters and encounters the paranormal.
        </Typography>
      </CardContent>
      <Button variant="contained">Learn more</Button>
    </Card>
    <Card className='monster' sx={{ maxHeight: 550 }}>
      <CardMedia
        className='monster'
        component="img"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F17400000%2FMonster-monster-17425959-1280-1024.jpg&f=1&nofb=1"
        alt="monst"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Monster
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The story by author Naoki Urasawa revolves around Kenzo Tenma, a Japanese surgeon living in Düsseldorf, 
        Germany whose life enters turmoil after getting himself involved with Johan Liebert, 
        one of his former patients, who is revealed to be a dangerous serial killer.
        The manga was adapted by Madhouse into a seventy-four episode anime television series.
        </Typography>
      </CardContent>
      <Button variant="contained">Learn More</Button>
    </Card>
    <Card className='vagabond' sx={{ maxHeight: 550 }}>
      <CardMedia
        className='vagabond'
        component="img"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6181%2F1599f856670ec018e5365671b5edd7d9045f794e_hq.jpg&f=1&nofb=1"
        alt="vagabondimg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vagabond
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a Japanese epic martial arts manga written by Takehiko Inoue and 
        portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto, based on 
        Eiji Yoshikawa's novel Musashi. It has been serialized in Kodansha's seinen manga magazine 
        Morning since September 1998, with its chapters collected into thirty-seven volumes as of July.
        </Typography>
      </CardContent>
      <Button variant="contained">Learn More</Button>
    </Card>
    </div>
  );
}
