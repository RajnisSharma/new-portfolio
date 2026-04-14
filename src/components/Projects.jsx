import { useState } from 'react'
import { PROJECTS } from '../constants'

const PER_PAGE = 3

function getVisiblePages(currentPage, totalPages) {
  // Show maximum 3 page numbers
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  // Middle case: show current page with neighbors
  if (currentPage > 1 && currentPage < totalPages) {
    return [currentPage - 1, currentPage, currentPage + 1]
  }

  // At start: show 1, 2, 3
  if (currentPage === 1) {
    return [1, 2, 3]
  }

  // At end: show last 3 pages
  return [totalPages - 2, totalPages - 1, totalPages]
}

export default function Projects() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(PROJECTS.length / PER_PAGE)
  const visible = PROJECTS.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const paginationItems = getVisiblePages(page, totalPages)
  const isFirstPage = page === 1
  const isLastPage = page === totalPages
  const goToPreviousPage = () => setPage(currentPage => Math.max(1, currentPage - 1))
  const goToNextPage = () => setPage(currentPage => Math.min(totalPages, currentPage + 1))

  return (
    <section className="portfolio" id="projects">
      <h2 className="heading">Latest <span className="accent">Projects</span></h2>

      <div className="portfolio-grid">
        {visible.map((p, idx) => (
          <div className="portfolio-card" key={p.id} style={{ animationDelay: `${idx * 0.05}s` }}>
            <ImageOrIcon src={p.image} icon={p.icon} alt={p.title} />
            <div className="overlay">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              {p.tags && (
                <div className="project-tags">
                  {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`Open ${p.title} in new tab`}
                title={`Open ${p.title}`}
              >
                <i className="bx bx-link-external" />
                <span>View Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-wrap">
          <button
            type="button"
            className="page-btn page-nav-btn"
            onClick={goToPreviousPage}
            disabled={isFirstPage}
            aria-label="Previous page"
          >
            Back
          </button>
          {paginationItems.map((item) => (
            <button
              key={item}
              type="button"
              className={`page-btn ${page === item ? 'active' : ''}`}
              onClick={() => setPage(item)}
              aria-label={`Page ${item}`}
              aria-current={page === item ? 'page' : undefined}
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            className="page-btn page-nav-btn"
            onClick={goToNextPage}
            disabled={isLastPage}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}

function ImageOrIcon({ src, icon, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div className="no-img-placeholder" title={alt}>
        <i className={`bx ${icon}`} />
      </div>
    )
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
}
