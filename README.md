# Hex the budget app (frontend)

## Technology stack

- React Js
- Redux
- Redux Saga(middleware)
- React Hook Form (Form Validation)
- Material UI (JSS) & Styled Component

## Getting Started

- `git clone https://github.com/arrlancore/hexa-app-frontend.git`
- `cd hexa-app-frontend`
- `npm install`
- `npm start` (Development)
- `npm run build && npm run start:prod` (Production)

After run `npm run build` the production script will be generated on `/build` directory

## CI/CD

Github & Netlify service

## Route Pages

- `/` for login page
- `/home` for homepage where admin can see list of places, perform CRUD for places & user able to explore all available place
- `/destination/:id` show all destination or tourist attaction on a place. Admin can add & remove the destination base on the `hexagonal` algorithm
- `/trip-plan/:id` show all destination or tourist attaction on a place. User can create a trip plan and see the summary including cost

## Structure Data (as Cluster class)

Basically all data is manage & validate on frontend side then use backend to storage the end result. We also can load existing nodes data from backend and load it on the frontend to be manage.

An utils has been create to manage graph data hexagonal, example of use as below.

```js
const hexaland = new Cluster();

// case 1 add
const c1 = performance.now();
hexaland.add({ name: 'ax' });
hexaland.add({ name: 'bx', border: 4 }, 'ax');
hexaland.add({ name: 'cx', border: 5 }, 'bx');
hexaland.add({ name: 'dx', border: 0 }, 'cx');
hexaland.add({ name: 'ex', border: 0 }, 'dx');
hexaland.add({ name: 'fx', border: 1 }, 'ex');
hexaland.add({ name: 'gx', border: 2 }, 'fx');
hexaland.add({ name: 'tx', border: 0 }, 'ax');
const c1e = performance.now();
console.log('case 1 running on ms:', (c1e - c1) / 1000);

const hexaland2 = new Cluster();
// case 2 add
hexaland2.add({ name: 'ax' });
hexaland2.add({ name: 'bx', border: 4 }, 'ax');
hexaland2.add({ name: 'cx', border: 5 }, 'bx');
hexaland2.add({ name: 'dx', border: 0 }, 'cx');
hexaland2.add({ name: 'tx', border: 5 }, 'ax');

const hexaland3 = new Cluster();
// case 3 delete
const c3 = performance.now();
hexaland3.add({ name: 'a' });
hexaland3.add({ name: 'b', border: 4 }, 'a');
hexaland3.add({ name: 'c', border: 5 }, 'b');
hexaland3.add({ name: 'd', border: 4 }, 'c');
hexaland3.add({ name: 'e', border: 5 }, 'c');
hexaland3.add({ name: 'f', border: 0 }, 'e');
hexaland3.add({ name: 'g', border: 1 }, 'f');
hexaland3.add({ name: 'h', border: 2 }, 'g');
hexaland3.add({ name: 'i', border: 0 }, 'h');
hexaland3.add({ name: 'j', border: 2 }, 'i');
hexaland3.add({ name: 'k', border: 3 }, 'j');
hexaland3.remove('c');

const c3e = performance.now();
console.log('case 3 running on ms:', (c3e - c3) / 1000);

// crete cluster with initial nodes
const hexaland4 = new Cluster(initialNodes);

// get all nodes on the cluster
hexaland.get();

// get a node by name on a cluster
hexaland.get('cx');
```
