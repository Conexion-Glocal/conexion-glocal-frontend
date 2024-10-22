import { column, defineDb, defineTable } from 'astro:db';

const Session = defineTable({
  columns: {
    id: column.text(),
    access_token: column.text(),
    refresh_token: column.text(),
    image: column.text(),
    primary_color: column.text(),
    secondary_color: column.text(),
    menu: column.text(),
  }
})

export default defineDb({
  tables: {Session}
});
