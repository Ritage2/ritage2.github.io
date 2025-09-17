import React from 'react'
export default function Loader(){
return (
<div className="flex items-center justify-center py-6">
<div className="w-12 h-12 border-4 border-t-transparent border-[var(--brand)] rounded-full animate-spin" aria-hidden="true"></div>
<span className="sr-only">Loading</span>
</div>
)
}