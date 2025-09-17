import React, { Component } from 'react'


export default class ErrorBoundary extends Component{
constructor(props){ super(props); this.state={hasError:false} }
static getDerivedStateFromError(){ return { hasError:true } }
componentDidCatch(err, info){ console.error('ErrorBoundary', err, info) }
render(){
if(this.state.hasError){
return (
<div className="min-h-[60vh] flex items-center justify-center">
<div className="card text-center">
<h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
<p className="mt-2 text-gray-600">Try refreshing the page or contact the developer.</p>
</div>
</div>
)
}
return this.props.children
}
}