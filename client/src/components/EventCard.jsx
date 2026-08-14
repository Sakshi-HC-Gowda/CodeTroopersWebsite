import { Link } from 'react-router-dom';
import { HiCalendar, HiLocationMarker, HiClock, HiUserGroup } from 'react-icons/hi';
import { HoverCard } from './Animated';
import { formatImageUrl } from '../utils/imageHelper';
import styles from './EventCard.module.css';

export default function EventCard({ event }) {
  const hasDate = event.date && !isNaN(new Date(event.date).getTime());
  const formattedDate = hasDate ? new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : null;

  return (
    <HoverCard>
      <article className={styles.card}>
        <div className={styles.banner}>
          <img src={formatImageUrl(event.banner)} alt={event.title} loading="lazy" />
          {event.status === 'upcoming' && (
            <span className={`${styles.badge} ${styles.upcoming}`}>
              Upcoming
            </span>
          )}
        </div>
        <div className={styles.body}>
          <h3>{event.title}</h3>
          {event.description && <p className={styles.desc}>{event.description.length > 120 ? `${event.description.slice(0, 120)}...` : event.description}</p>}
          <div className={styles.meta}>
            {formattedDate && <span><HiCalendar /> {formattedDate}</span>}
            {event.time && <span><HiClock /> {event.time}</span>}
            {event.venue && <span><HiLocationMarker /> {event.venue}</span>}
            {event.organizer && <span><HiUserGroup /> {event.organizer}</span>}
          </div>
        </div>
      </article>
    </HoverCard>
  );
}

export function EventCardCompact({ event }) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <HoverCard>
      <article className={styles.compact}>
        <div className={styles.compactDate}>
          <span className={styles.day}>{date.getDate()}</span>
          <span className={styles.month}>{date.toLocaleDateString('en-IN', { month: 'short' })}</span>
        </div>
        <div>
          <h4>{event.title}</h4>
          <p>{formattedDate} · {event.venue}</p>
        </div>
      </article>
    </HoverCard>
  );
}
