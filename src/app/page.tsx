import { IconChecks, IconNote, IconQuestionMark } from "@tabler/icons-react";

import { Card, CardBody, CardTitle } from "@/app/components/ui/card";
import { Timeline } from "@/app/components/ui/timeline";

export default async function Layout() {
  const mockEvents = [
    {
      user: "Sashko",
      date: "now",
      title: "A very important note",
      description: "Deleted note",
    },
    {
      user: "Sashko Stoev",
      date: "2 mins ago",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      description: "Edited note",
    },
  ];

  return (
    <main className="bg-base-200 grid h-full w-full grid-cols-1 gap-6 p-6 md:grid-cols-3">
      <Card className="md:col-span-3">
        <CardBody>
          <CardTitle>Test Fonts</CardTitle>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic voluptates saepe
            atque itaque. Pariatur ullam, quod reprehenderit, repellat autem ducimus sint laudantium
            aspernatur maiores vero facere officia quae eligendi.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Totam hic voluptates saepe atque itaque. Pariatur ullam,
            quod reprehenderit, repellat autem ducimus sint laudantium aspernatur maiores vero
            facere officia quae eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam hic voluptates saepe atque itaque. Pariatur ullam, quod reprehenderit, repellat
            autem ducimus sint laudantium aspernatur maiores vero facere officia quae eligendi.
          </p>
        </CardBody>
      </Card>
      <Card className="md:row-span-3">
        <CardBody>
          <CardTitle>Recent Activity</CardTitle>
          <Timeline events={mockEvents} />
        </CardBody>
      </Card>

      <Card className="md:col-span-2">
        <CardBody>
          <CardTitle>Stats</CardTitle>
          <div className="stats bg-base-200 shadow">
            <div className="stat place-items-center">
              <div className="stat-title">
                <IconChecks size={34} />
              </div>
              <div className="stat-desc">Tasks</div>
              <div className="stat-value">2</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">
                <IconQuestionMark size={36} />
              </div>
              <div className="stat-desc">Questions</div>
              <div className="stat-value">0</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">
                <IconNote size={36} />
              </div>
              <div className="stat-desc">Notes</div>
              <div className="stat-value">23</div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Tasks</CardTitle>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <IconChecks size={16} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="flex items-center gap-2">
              <IconChecks size={16} />{" "}
              <span className="w-full truncate">
                Voluptates fuga qui, officiis unde et voluptas dolorum, neque, placeat quia libero
                atque commodi blanditiis aperiam veniam iusto amet ducimus quae distinctio.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IconChecks size={16} /> Item 1
            </li>
            <li className="flex items-center gap-2">
              <IconChecks size={16} /> Item 1
            </li>
            <li className="flex items-center gap-2">
              <IconChecks size={16} /> Item 1
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Questions</CardTitle>
          <ul className="">
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Notes</CardTitle>
          <ul className="">
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Articles</CardTitle>
          <ul className="">
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </CardBody>
      </Card>
    </main>
  );
}
