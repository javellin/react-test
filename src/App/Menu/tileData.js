import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import BookIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from "@material-ui/icons/Person";
import PublishIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <Link to="/favorites" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItem>
    </Link>
    <Link to="/books" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Books" />
      </ListItem>
    </Link>
    <Link to="/authors" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Authors" />
      </ListItem>
    </Link>
    <Link to="/publishers" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PublishIcon />
        </ListItemIcon>
        <ListItemText primary="Publishers" />
      </ListItem>
    </Link>
  </div>
);
