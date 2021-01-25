import db from '../../lib/firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    const ref = db.ref('views').child(req.query.id);
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
};