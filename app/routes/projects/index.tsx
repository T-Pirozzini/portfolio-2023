import { Link } from "@remix-run/react";

export default function index() {
  return (
    <div>
      <div>index</div>
      <Link to="/comb">Comb</Link>
    </div>
  )
}

