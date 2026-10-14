# Endform loop URLs (movie-link-accessible-name)

- Skills PR: https://github.com/debs-obrien/playwright-movies-app/pull/89
- Issue: https://github.com/debs-obrien/playwright-movies-app/issues/92
- Fix PR (draft): https://github.com/debs-obrien/playwright-movies-app/pull/93
- Regression: tests/logged-out/movie-link-accessible-name.spec.ts
- Diff focus: movies-app/components/MovieList/MovieListItem/index.js (+ ReactStars CSS to head)
- Live: https://debs-obrien.github.io/playwright-movies-app/
- Repo: https://github.com/debs-obrien/playwright-movies-app

Debbie-voice: Movie cards announce themselves as “poster of Superman Superman rating” (sometimes with CSS soup) instead of just the title  -  so getByRole link exact 'Superman' finds nothing.

Seed fallback only (do not merge): #90 / #91
