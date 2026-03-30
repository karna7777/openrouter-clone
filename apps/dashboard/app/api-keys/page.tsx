import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Plus, 
  Key, 
  Copy, 
  Trash2, 
  MoreVertical, 
  Eye, 
  EyeOff, 
  ShieldCheck,
  Calendar,
  AlertTriangle
} from "lucide-react";

export default function ApiKeysPage() {
  const keys = [
    { id: 1, name: "Production Gateway", key: "sk-or-v1-7a8...9b2", created: "2024-03-15", status: "Active", lastUsed: "2 mins ago" },
    { id: 2, name: "Development SDK", key: "sk-or-v1-4d2...1f8", created: "2024-03-20", status: "Active", lastUsed: "1 hour ago" },
    { id: 3, name: "Testing Suite", key: "sk-or-v1-x9a...3c4", created: "2024-03-25", status: "Revoked", lastUsed: "5 days ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
            <Key className="w-8 h-8 text-primary" />
            API Keys
          </h1>
          <p className="text-muted-foreground font-medium">Manage your security credentials and access tokens.</p>
        </div>
        <Button size="sm" className="shadow-[0_0_15px_rgba(201,168,78,0.3)]">
          <Plus className="w-4 h-4 mr-1" /> Create New Key
        </Button>
      </div>

      {/* Security Tip */}
      <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Security Best Practice</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Never share your API keys or expose them in client-side code. Use environment variables and secret management systems to keep your credentials safe.
          </p>
        </div>
      </div>

      {/* Keys List */}
      <Card className="border-white/5">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Name</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">API Key</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Status</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {keys.map((key) => (
                  <tr key={key.id} className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <div className="font-bold text-foreground">{key.name}</div>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase">
                          <Calendar className="w-3 h-3" /> Created {key.created}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <code className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-white/5 text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                          {key.key}
                        </code>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                        key.status === "Active" 
                          ? "bg-green-500/10 border-green-500/20 text-green-400" 
                          : "bg-red-500/10 border-red-500/20 text-red-400"
                      )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full", key.status === "Active" ? "bg-green-400" : "bg-red-400")} />
                        {key.status}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-bold uppercase mt-1 ml-1">
                        Last used {key.lastUsed}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground md:hidden">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Revocation Warning */}
      <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/5 text-xs text-red-400/80 font-medium flex items-center gap-3">
         <AlertTriangle className="w-4 h-4 shrink-0" />
         Revoking a key is permanent and will immediately break any applications using it. Use with caution.
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
