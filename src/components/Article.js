import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from'axios';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: 350,
    width: 450,
    
    marginRight:30,
    marginLeft:30,
    marginTop:80,
    // marginDown:20
  },
  control: {
    padding: theme.spacing.unit * 1,
  },
  img: {
      height:300,
      width:410,
      marginLeft:20,
      marginRight:20,
      marginTop:10,
      marginBottom:10
  },
  position:{
    textAlign: 'center'
  },
  deco:{
    textDecoration: 'none',
    
    fontFamily: 'roboto-regular',
   textAlign:'centre',
    color:'black',
  },
  article:{
    paddingLeft:20
  },
  
  [theme.breakpoints.down("md")]:{
    paper:{
      minHeight:350,
      width:300,
    
    },
    img: {
        height:200,
        width:260,
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        marginBottom:5
    },
    titile:{
      textAlign:'center'
    },
   
    
  }
});

class Article extends React.Component {
   state={
       allArticle:[]
   }
   componentDidMount(){
    axios.get('http://qa.parentlane.com/api/content-feed/')
     .then((response)=> {
        console.log(response.data.content);
         this.setState({
             allArticle:response.data.content
         })
     })
     .catch(err=>console.log(err)) 
    }
render() {
    const { classes } = this.props;
    const {allArticle} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} >
          <Grid container className={classes.demo} justify="center" >
            {allArticle.map(value => (
            //    <Link className={classes.deco}  key={value.article.id} to={{ pathname: '/description', state: value }} >
               <Grid key={value.article.id} item>
                <Paper className={classes.paper} >
                <Typography  align="center" component="h2" variant="headline"  gutterBottom  >{value.article.title}</Typography>
                <img alt={value} className={classes.img} src={value.article.image_url}></img>
                {value.categories.map(data=>(
                  <Chip className="tag" key={data.id} color="primary" label={data.name}/>
                )
                )}
                <hr/>
                <div className="article">
                    <span align="center" justify="content" dangerouslySetInnerHTML={{__html :`${value.article.text.substring(0,150)}`}}
                    /><a href={value.article.url}>...click to know more</a>
                </div>
                <div> <IconButton aria-label="Add to favorites">
                  {value.article.likes_count.length>0? value.article.likes_count: ""}<FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton></div>
               
                
                </Paper>
              </Grid>
            //   </Link>
            ))}
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}



export default withStyles(styles)(Article);