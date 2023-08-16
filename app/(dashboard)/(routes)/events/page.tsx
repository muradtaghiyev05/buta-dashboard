import events from "@/events-data.json";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Upcoming Events"
          description="Do not miss the upcoming events in Buta Group"
        />
        <Separator />
        <div className="grid gap-4 grid-cols-1">
          {events.map((event) => (
            <Card key={event.id} className="flex">
              <div className="p-5 h-full flex flex-col justify-center items-center gap-2">
                <Calendar className="h-12 w-12 text-muted-foreground" />
                <span className="w-28 text-center text-lg font-semibold">
                  {event.date}
                </span>
              </div>
              <CardHeader className="flex flex-col gap-1">
                <CardTitle className="text-xl font-bold">
                  {event.title}
                </CardTitle>
                <CardDescription>{event.description}</CardDescription>
                <Button className="w-fit">See details</Button>
              </CardHeader>
              <CardContent className="flex flex-col p-5 gap-2 ml-auto">
                <span className="font-semibold text-lg">
                  from {event.start} - to {event.end}
                </span>
                <span className="text-muted-foreground">
                  at {event.location}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
