(async () => {
  const req = await fetch("/scholarships.json");
  const data = await req.json();

  const mapped = data.map((scholarship) => [
    scholarship["name"],
    scholarship["type"],
    scholarship["category"],
    scholarship["value"],
    scholarship["about"],
    scholarship["link"]
  ])

  new DataTable('#fiu', {
      columns: [
          { title: 'Name' },
          { title: 'Type' },
          { title: 'Category' },
          { title: 'Value' },
          { title: 'About' },
          { title: 'Link' }
      ],
    data: mapped,
      paging: false
  });
})()
