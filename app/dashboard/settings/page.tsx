"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Lock, Moon, Save, Sun, User } from "lucide-react"

import { useDashboardStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import OnboardingForm from "@/app/onboarding/_components/OnboardingForm"
import { industries } from "@/data/OnboardingForm"

export default function SettingsPage() {
  const { data, ui, toggleDarkMode, updateUserPreferences } = useDashboardStore()
  const { userInfo } = data
  const { darkMode } = ui

  const [profileForm, setProfileForm] = useState({
    name: userInfo.name,
    email: userInfo.email,
    bio: "Frontend developer passionate about creating intuitive user experiences.",
    timezone: userInfo.timezone || "Europe/London",
  })

  const handleProfileChange = (field: string, value: string) => {
    setProfileForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    courseReminders: true,
    interviewReminders: true,
    marketingEmails: false,
    newInsights: true,
  })

  const handleNotificationToggle = (field: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev],
    }))
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6 max-w-4xl mx-auto"
  >
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">Manage your account preferences</p>
    </div>

    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid grid-cols-4 w-full md:w-auto">
        <TabsTrigger value="profile">
          <User className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Profile</span>
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="appearance">
          <Sun className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Appearance</span>
        </TabsTrigger>
        <TabsTrigger value="security">
          <Lock className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Security</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/images/avatars/alex.png" alt={userInfo.name} />
                      <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => handleProfileChange("name", e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => handleProfileChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    value={profileForm.bio}
                    onChange={(e) => handleProfileChange("bio", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={profileForm.timezone}
                    onValueChange={(value) => handleProfileChange("timezone", value)}
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT)</SelectItem>
                      <SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
                      <SelectItem value="Asia/Tokyo">Japan Standard Time (JST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Current Plan: <span className="text-primary">{userInfo.subscriptionTier}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Renews on May 15, 2024</p>
                  </div>
                  <Button variant="outline">Manage Subscription</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>


         

        

        </motion.div>
      </TabsContent>

      <TabsContent value="notifications">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={() => handleNotificationToggle("emailNotifications")}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Course Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminders about your ongoing courses</p>
                    </div>
                    <Switch
                      checked={notificationSettings.courseReminders}
                      onCheckedChange={() => handleNotificationToggle("courseReminders")}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Interview Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminders about upcoming interviews</p>
                    </div>
                    <Switch
                      checked={notificationSettings.interviewReminders}
                      onCheckedChange={() => handleNotificationToggle("interviewReminders")}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                    </div>
                    <Switch
                      checked={notificationSettings.marketingEmails}
                      onCheckedChange={() => handleNotificationToggle("marketingEmails")}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Insights</Label>
                      <p className="text-sm text-muted-foreground">Get notified about new industry insights</p>
                    </div>
                    <Switch
                      checked={notificationSettings.newInsights}
                      onCheckedChange={() => handleNotificationToggle("newInsights")}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>

      <TabsContent value="appearance">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how NeoPrep looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      <Switch
                        checked={darkMode}
                        onCheckedChange={() => {
                          toggleDarkMode()
                          updateUserPreferences({ darkMode: !darkMode })
                        }}
                      />
                      <Moon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sidebar Collapsed</Label>
                      <p className="text-sm text-muted-foreground">Default sidebar state on page load</p>
                    </div>
                    <Switch
                      checked={ui.sidebarCollapsed}
                      onCheckedChange={() => {
                        updateUserPreferences({ sidebarCollapsed: !ui.sidebarCollapsed })
                      }}
                    />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select defaultValue="en-US">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="en-GB">English (UK)</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="ja">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>

      <TabsContent value="security">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Update Password</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Protect your account with 2FA</p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Sessions</CardTitle>
                <CardDescription>Manage your active sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">London, UK • Chrome on Windows</p>
                      <p className="text-xs text-muted-foreground">Started 2 hours ago</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="font-medium">Mobile Session</p>
                      <p className="text-sm text-muted-foreground">London, UK • NeoPrep App on iPhone</p>
                      <p className="text-xs text-muted-foreground">Started 1 day ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="destructive">Sign Out All Devices</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </TabsContent>
    </Tabs>
  </motion.div>
  )
}
