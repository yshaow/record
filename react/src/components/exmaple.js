/**
 * 案例
 */
import React from 'react'

/**
 * 产品header
 */
class ProductCategoryRow extends React.Component {
    render() {
        return <tr>
            <th colSpan="2">{ this.props.category }</th>
        </tr>;
    }
}

/**
 * 产品列表
 */
class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={ {color: "red"} }>
                {this.props.product.name}
            </span>;

        return <tr>
            <td>{ name }</td>
            <td>{ this.props.product.price }</td>
        </tr>;
    }
}

/**
 * 产品容器
 */
class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1
                || (!product.stocked && this.props.inStockOnly)) return;

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={ product.category } key={ product.category }/>);
            }

            rows.push(<ProductRow product={ product } key={ product.name }/>);
            lastCategory = product.category;
        });

        return <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>;
    }
}

/**
 * 搜索框
 */
class SearchBar extends React.Component {
    inputChange(e) {
        var currElem = e.currentTarget,
            val = "";

        val = currElem.type === 'checkbox' ? currElem.checked : currElem.value;
        this.props.handleInputVal(currElem.name, val);
    }

    render() {
        return <form>
            <input type="text" placeholder="Search..." name="filterText" value={ this.props.filterText }
                   onChange={ e => this.inputChange(e)}/>
            <p>
                <input type="checkbox" checked={ this.props.inStockOnly } value={ this.props.inStockOnly }
                       name="inStockOnly" onChange={ e => this.inputChange(e)}/>{" "}Only show products in stock!
            </p>
        </form>;
    }
}

/**
 * 组件容器
 */
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: "",
            inStockOnly: false
        }

        this.handleInputVal = this.handleInputVal.bind(this);
    }

    handleInputVal(currInputName, val) {
        this.setState({
            [currInputName]: val
        });
    }

    render() {
        return <div>
            <SearchBar
                filterText={ this.state.filterText }
                inStockOnly={ this.state.inStockOnly }
                handleInputVal={this.handleInputVal}
            />
            <ProductTable
                products={this.props.products}
                filterText={ this.state.filterText }
                inStockOnly={ this.state.inStockOnly }
            />
        </div>;
    }
}

export default FilterableProductTable;












