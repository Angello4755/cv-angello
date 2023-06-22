import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Chip } from "@mui/material";
import { TECNOLOGIE } from "../../../../../data/workExperence";
import { Project as IProject } from "../../../../../data/language";
import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Props = {
  project: IProject;
};
const Project: FC<Props> = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        action={
          <IconButton
            href={project.urlDeploy}
            target="_blank"
            rel="noopener"
            aria-label={project.name}
          >
            <OpenInNewIcon />
          </IconButton>
        }
        title={project.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={project.mainImage}
        alt={project.name}
      />
      <CardContent>
        <IconButton
          href={project.github}
          target="_blank"
          rel="noopener"
          aria-label={project.name}
        >
          <GitHubIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary" align="justify">
          {project.description}
        </Typography>
      </CardContent>
      <Box>
        {project.tecnologies.map((tec) => (
          <Chip
            label={tec}
            color="secondary"
            size="small"
            variant="outlined"
            sx={{ marginRight: 0.5, marginBottom: 0.5 }}
          />
        ))}
      </Box>
    </Card>
  );
};

export default Project;
