import { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import { TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
          <TriangleAlert className="h-12 w-12 text-accent-500" />
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Une erreur est survenue
          </h2>
          <p className="max-w-md text-muted-foreground">
            Veuillez rafraîchir la page ou réessayer plus tard.
          </p>
          <Button
            variant="secondary"
            onClick={() => window.location.reload()}
          >
            Rafraîchir la page
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
