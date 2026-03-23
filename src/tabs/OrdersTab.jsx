import { useState } from 'react'
import './OrdersTab.css'

const ORDERS = [
  { id: 'ORD-001', item: 'Keyboard',     date: 'Mar 18, 2026', amount: 149.99, status: 'Delivered' },
  { id: 'ORD-002', item: 'Monitor',      date: 'Mar 14, 2026', amount: 699.00, status: 'Shipped' },
  { id: 'ORD-003', item: 'Office Chair', date: 'Mar 10, 2026', amount: 389.00, status: 'Processing' },
  { id: 'ORD-004', item: 'USB Hub',      date: 'Mar 5, 2026',  amount: 59.99,  status: 'Delivered' },
  { id: 'ORD-005', item: 'Headset',      date: 'Feb 28, 2026', amount: 229.00, status: 'Cancelled' },
]

export default function OrdersTab() {
  const [filter, setFilter] = useState('All')
  const statuses = ['All', 'Delivered', 'Shipped', 'Processing', 'Cancelled']

  const filtered = filter === 'All' ? ORDERS : ORDERS.filter(o => o.status === filter)

  const total = filtered
    .filter(o => o.status !== 'Cancelled')
    .reduce((sum, o) => sum + o.amount, 0)

  return (
    <div id="orders">
      {/* filter buttons */}
      <div id="filter-bar">
        {statuses.map(s => (
          <button
            key={s}
            className={filter === s ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* orders table */}
      <table id="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.date}</td>
              <td>${order.amount.toFixed(2)}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && <p id="no-orders">No orders match this filter.</p>}

      <p id="orders-total">Total: ${total.toFixed(2)}</p>
    </div>
  )
}