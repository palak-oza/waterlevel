// OverviewWidget.tsx
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type OverviewWidgetProps = {
  color?: "primary" | "warning" | "error";
  description: string;
  title: string;
};

const OverviewWidget = ({ description, title }: OverviewWidgetProps) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom component="div" variant="h4">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h4">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewWidget;
