import React from "react";
import { arrayOf, shape, string, any } from "prop-types";
import { compose } from "recompose";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

class Grid extends React.PureComponent {
  static propTypes = {
    schema: arrayOf(
      shape({
        key: string,
        label: string
      })
    ),
    data: any
  };

  page = 1;
  rowsPerPage = 10;

  render() {
    const { schema, data, classes, onDeleteClick } = this.props;

    if (data && data.length >= 0) {
      return (
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                {schema.map((obj, index) => {
                  return <TableCell key={index}>{obj.label}</TableCell>;
                })}
                <TableCell numeric>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, indexData) => (
                <TableRow key={indexData}>
                  {schema.map((schemaObj, indexSchema) => (
                    <TableCell key={indexSchema}>
                      {value[schemaObj.key]}
                    </TableCell>
                  ))}
                  <TableCell numeric>                   
                    <DeleteIcon onClick={() => onDeleteClick(value)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return false;
    }
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export default compose(withStyles(styles))(Grid);
