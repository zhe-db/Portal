var relation_label = 'Own';

var subject = {
  label: 'Person',
  name: 'Walt'
}

var object = {
  label: 'Product',
  name:  'O365 Migration'
}

let createQuery = `MATCH (subject:${subject.label} {
  name: ${subject.name}
})-[:${relation_label}]->(object:${object.label} {
  name: ${object.name}
}) RETURN subject, object`;

console.log(createQuery.replace(/\n/g, ''));
