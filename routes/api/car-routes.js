

router.get('/', async (req, res) => {
    try {
      const carData = await Car.findAll({
        include: [{ model: Category }, { model: Tag }]
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });