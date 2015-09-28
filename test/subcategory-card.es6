import React from 'react/addons';

import SubcategoryCard from '../subcategory-card';

import ListOfComponent from '../list-of-component';
import ArticleItem from '../article-item';

const { createRenderer } = React.addons.TestUtils;
describe('SubcategoryCard', () => {

  it('is compatible with React.Component', () => {
    SubcategoryCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<SubcategoryCard title={'Here is a title'} />).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders a basic subcategory card', () => {
      renderer.render(<SubcategoryCard childs={[]} />, {});
      const childMetadata = {
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__subcategory-card">
          <ListOfComponent
            className="navigation__articles"
            component={ArticleItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

  });

});
