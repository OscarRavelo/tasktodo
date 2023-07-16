"use client"
import Link from 'next/link'
export const Navigation = () => {
  return (
    <nav className='flex flex-col items-center'>
      <Link href="/">Task List</Link>
      <Link href="/new">Create Task</Link>
    </nav>
  )
}
