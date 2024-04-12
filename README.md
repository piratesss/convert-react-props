### Convert React Props

## Convert sender to receiver props and receiver to sender props

<hr/>

## Features

    # Works for both functional and class component props
    # Use of enter (line break) or , will automatically format props
    # Sort the props by the order of their length
    # A copy text which copies the converted props to clipboard
    # Whitespace formatting
    # While converting sender to receiver props,
    validation has been done to check if the prop name and value are same

### Examples

## Sender to receiver props

```
    name, phoneNumber
    address
    email
```

gets converted to

```
    name={name}
    email={email}
    address={address}
    phoneNumber={phoneNumber}
```

<hr />

## Receiver to sender props

```
    client={client} address={address}
    phone={phone}
```

gets converted to

```
    phone,
    client,
    address,
```
