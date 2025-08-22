"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Facebook, Linkedin, Twitter, Link2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CertificateData } from "@/types/zodAssesmentSchema"
import { shareCertificate } from "@/lib/certificate-generator"


interface ShareCertificateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  certificateData: CertificateData
}

export function ShareCertificateDialog({ open, onOpenChange, certificateData }: ShareCertificateDialogProps) {
  const { toast } = useToast()

  const handleShare = (platform: "linkedin" | "twitter" | "facebook") => {
    shareCertificate(platform, certificateData)

    toast({
      title: "Sharing Certificate",
      description: `Opening ${platform} sharing dialog in a new window.`,
      duration: 3000,
    })
  }

  const handleCopyLink = () => {
    // In a real app, this would generate a shareable link to the certificate
    navigator.clipboard.writeText(window.location.href)

    toast({
      title: "Link Copied",
      description: "Certificate link copied to clipboard.",
      duration: 3000,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Your Achievement</DialogTitle>
          <DialogDescription>Share your certificate with your network</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          <Button variant="outline" className="flex items-center gap-2 h-16" onClick={() => handleShare("linkedin")}>
            <Linkedin className="h-5 w-5 text-[#0077B5]" />
            <div className="flex flex-col items-start">
              <span className="font-medium">LinkedIn</span>
              <span className="text-xs text-muted-foreground">Share with your professional network</span>
            </div>
          </Button>

          <Button variant="outline" className="flex items-center gap-2 h-16" onClick={() => handleShare("twitter")}>
            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Twitter</span>
              <span className="text-xs text-muted-foreground">Share your achievement</span>
            </div>
          </Button>

          <Button variant="outline" className="flex items-center gap-2 h-16" onClick={() => handleShare("facebook")}>
            <Facebook className="h-5 w-5 text-[#1877F2]" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Facebook</span>
              <span className="text-xs text-muted-foreground">Share with friends and family</span>
            </div>
          </Button>

          <Button variant="outline" className="flex items-center gap-2 h-16" onClick={handleCopyLink}>
            <Link2 className="h-5 w-5" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Copy Link</span>
              <span className="text-xs text-muted-foreground">Copy shareable certificate link</span>
            </div>
          </Button>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
