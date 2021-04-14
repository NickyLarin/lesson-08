import "./List.css";
import { emptyFunction } from "../../utils";
import { ListEntry } from "../ListEntry/ListEntry";
import { ObjectWithID } from "../../types/base";
import { Spinner } from "../Spinner/Spinner";
import block from "bem-cn";
import React from "react";

interface State {
  activeEntryIndex: number;
}

interface Props<T extends ObjectWithID> {
  items: T[];
  getItemValue: (item: T) => string;
  getItemInfo?: ((item: T) => string) | null;
  loading?: boolean;
  saveItem?: (id: number, value: any) => void;
  deleteItem?: (id: number) => void;
}

const b = block("list");

export class List<T extends ObjectWithID> extends React.Component<Props<T>, State> {
  constructor(props: Props<T>) {
    super(props);
    this.state = { activeEntryIndex: -1 };
  }

  setActiveEntryIndex = (index: number) => {
    this.setState({ activeEntryIndex: index });
  };

  handleSaveItem = (itemIndex: number, newItemValue: string) => {
    const { saveItem = emptyFunction, items } = this.props;
    const currentItem = items[itemIndex];
    saveItem(currentItem.id, newItemValue);
    this.setActiveEntryIndex(-1);
  };

  handleDeleteItem = (itemIndex: number) => {
    const { deleteItem = emptyFunction, items } = this.props;
    const currentItem = items[itemIndex];
    deleteItem(currentItem.id);
  };

  render() {
    const { items, loading, getItemValue, getItemInfo } = this.props;
    const { activeEntryIndex } = this.state;
    if (loading) return <Spinner className={b("loading-spinner")} size={"20em"} lineWidth={50} />;
    return (
      <div className={b()}>
        {items.map((item: any, index: number) => (
          <ListEntry
            active={index === activeEntryIndex}
            key={item.id}
            id={item.id}
            itemValue={getItemValue(item)}
            itemInfo={!!getItemInfo ? getItemInfo(item) : null}
            setActive={(isActive: boolean) => {
              isActive ? this.setActiveEntryIndex(index) : this.setActiveEntryIndex(-1);
            }}
            saveItem={(newItemValue: string) => {
              this.handleSaveItem(index, newItemValue);
            }}
            removeItem={() => {
              this.handleDeleteItem(index);
            }}
          />
        ))}
      </div>
    );
  }
}
