import db from '../../../lib/firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    console.log('params1', req.query.slug);
    const ref = db.ref('views').child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val()
    });
  }

  if (req.method === 'GET') {
    console.log('params2', req.query.slug);
    const snapshot = await db.ref('views').child(req.query.slug).once('value');
    console.log('snap : ', snapshot);
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
};