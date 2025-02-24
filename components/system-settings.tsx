import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function SystemSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
          <div className="flex items-center space-x-2">
            <Switch id="maintenance-mode" />
            <Label htmlFor="maintenance-mode">Enable maintenance mode</Label>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="transaction-fee">Transaction Fee (%)</Label>
          <Input id="transaction-fee" type="number" placeholder="Enter transaction fee percentage" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-transaction-limit">Max Transaction Limit</Label>
          <Input id="max-transaction-limit" type="number" placeholder="Enter max transaction limit" />
        </div>
        <Button>Save Settings</Button>
      </CardContent>
    </Card>
  )
}

