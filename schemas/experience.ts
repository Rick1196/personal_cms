export default {
  name: 'experiences',
  type: 'document',
  title: 'Experiences',
  fields: [
    {title: 'from', name: 'from', type: 'date'},
    {title: 'to', name: 'to', type: 'date'},
    {title: 'title', name: 'title', type: 'string'},
    {title: 'description', name: 'description', type: 'array', of: [{type: 'block'}]},
    {title: 'company', name: 'company', type: 'string'},
    {
      title: 'technologies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
