function createTicketSystem() {
  let counter = 0;
  function generateticket() {
    counter++;
    return counter;
  }

  function getcurrentticket() {
    return counter;
  }
  return {
    generateticket,
    getcurrentticket,
  };
}

let ticket = createTicketSystem();
console.log(ticket.generateticket());
console.log(ticket.generateticket());
console.log(ticket.generateticket());
console.log(ticket.getcurrentticket());
