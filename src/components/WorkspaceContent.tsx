
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FolderOpen, 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  ArrowRight,
  Plus
} from "lucide-react";

const statsCards = [
  {
    title: "Active Projects",
    value: "12",
    description: "3 due this week",
    icon: FolderOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Team Members",
    value: "24",
    description: "8 online now",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Completed Tasks",
    value: "148",
    description: "+12% from last month",
    icon: CheckCircle2,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Productivity",
    value: "94%",
    description: "Above target",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const recentProjects = [
  {
    name: "Website Redesign",
    status: "In Progress",
    progress: 75,
    dueDate: "Dec 15",
    team: 4,
    priority: "High"
  },
  {
    name: "Mobile App Development",
    status: "Planning",
    progress: 25,
    dueDate: "Jan 30",
    team: 6,
    priority: "Medium"
  },
  {
    name: "Marketing Campaign",
    status: "Review",
    progress: 90,
    dueDate: "Dec 10",
    team: 3,
    priority: "High"
  },
  {
    name: "Product Launch",
    status: "Not Started",
    progress: 0,
    dueDate: "Feb 15",
    team: 8,
    priority: "Low"
  }
];

const recentActivities = [
  {
    action: "John completed",
    target: "UI Design Review",
    time: "2 hours ago",
    type: "completed"
  },
  {
    action: "Sarah added",
    target: "3 new tasks to Mobile App",
    time: "4 hours ago",
    type: "added"
  },
  {
    action: "Team meeting",
    target: "scheduled for tomorrow",
    time: "6 hours ago",
    type: "scheduled"
  },
  {
    action: "Alex updated",
    target: "project timeline",
    time: "1 day ago",
    type: "updated"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "bg-red-100 text-red-700";
    case "Medium": return "bg-yellow-100 text-yellow-700";
    case "Low": return "bg-green-100 text-green-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress": return "bg-blue-100 text-blue-700";
    case "Planning": return "bg-purple-100 text-purple-700";
    case "Review": return "bg-orange-100 text-orange-700";
    case "Not Started": return "bg-gray-100 text-gray-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export function WorkspaceContent() {
  return (
    <main className="flex-1 p-6 space-y-6 overflow-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Track progress on your active projects</CardDescription>
                </div>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Project
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.name} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        Due {project.dueDate}
                        <Users className="w-4 h-4 ml-2" />
                        {project.team} members
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(project.priority)} variant="secondary">
                        {project.priority}
                      </Badge>
                      <Badge className={getStatusColor(project.status)} variant="secondary">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full gap-2 mt-4">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your workspace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.action}</span>{" "}
                      <span className="text-gray-600">{activity.target}</span>
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full gap-2 mt-4">
                View All Activity
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
