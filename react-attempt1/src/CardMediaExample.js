import React from 'react'
import parse from 'html-react-parser'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: "100px"
    }
  });

const CardMediaExample = ({attribute}) => {
    const classes = useStyles();

    const postDetail = attribute;
    let excerpt = postDetail.excerpt.rendered;
    excerpt = excerpt.replace("<p>", "").replace("<\/p>", "");
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={postDetail.images.large}
                title={postDetail.title.rendered}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {parse(postDetail.title.rendered)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { parse(excerpt) }
                </Typography>
            </CardContent>
        </Card>
    )
}


export default CardMediaExample