"use client"

import type { IndustryData } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpenIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react"

type EducationSectionProps = {
  data: IndustryData
}

export default function EducationSection({ data }: EducationSectionProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Educational Pathways</CardTitle>
          <CardDescription>Academic and certification routes into ${data.industryName}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="degrees" className="space-y-4">
            <TabsList>
              <TabsTrigger value="degrees">
                <GraduationCapIcon className="mr-2 h-4 w-4" />
                Degrees
              </TabsTrigger>
              <TabsTrigger value="certifications">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                Certifications
              </TabsTrigger>
              <TabsTrigger value="alternative">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Alternative Routes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="degrees">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  While specific {data.industryName} degrees are emerging, most professionals enter the field through these
                  traditional degrees:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.educationalPathways.degrees.map((degree, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="bg-primary/10 p-4">
                        <h3 className="font-medium">{degree}</h3>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {index === 0 &&
                            "Computer Science and related engineering degrees provide the strongest foundation for cloud computing careers."}
                          {index === 1 &&
                            "Master of Computer Applications offers a path for non-CS graduates to enter the field."}
                          {index === 2 &&
                            "Specialized diplomas in cloud technologies can provide focused, practical training."}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="certifications">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                {data.industryName} certifications are highly valued in the industry and often required for many positions:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.educationalPathways.certifications.map((cert, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="bg-primary/10 p-4">
                        <h3 className="font-medium">
                          {cert}
                        </h3>
                      </div>
                      <CardContent className="p-4">
                       
                        <div className="mt-2">
                          <Badge variant="outline">
                            {index === 0
                              ? "Industry Standard"
                              : index === 1
                                ? "Widely Recognized"
                                : index === 2
                                  ? "Growing Demand"
                                  : "Vendor-Neutral"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="alternative">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Alternative pathways to enter {data.industryName} without traditional degrees:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {data.educationalPathways.alternativeRoutes.map((route, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="bg-primary/10 p-4">
                        <h3 className="font-medium">
                          {route.split(" ")[0]} {route.split(" ")[1] || ""}
                        </h3>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">{route}</p>
                        <div className="mt-2">
                          <Badge variant="outline">
                            {index === 0
                              ? "Intensive Training"
                              : index === 1
                                ? "Direct from Providers"
                                : "Self-Paced Learning"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Internship Opportunities</CardTitle>
          <CardDescription>Getting practical experience in {data.industryName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium">Availability</h3>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <p className="font-medium">{data.internshipOpportunities.availability}</p>
              </div>
              <p className="text-sm text-muted-foreground">
              {data.industryName} internships are widely available across India, especially in tech hubs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Common Areas</h3>
              <div className="flex flex-wrap gap-2">
                {data.internshipOpportunities.commonAreas.map((area, index) => (
                  <Badge key={index} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Timing</h3>
              <p className="text-sm text-muted-foreground">{data.internshipOpportunities.timing}</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">

          <h3 className="font-medium">Tips for Securing Internships</h3>
          <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
            {
              data.tipsForSecuringInternships.map((item, index)=>(
                <li key={index}>{item}</li>
              ))
            }
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
